(ns fitness-term.core
  (:require [cheshire.core :as json]
            [clojure.pprint :as pprint]))

(import 'java.time.format.DateTimeFormatter
        'java.time.LocalDate)

;; Load the current stats from the file.
(defn load-json-file []
  (-> "//home//stuart//Source//stuartstein777.github.io//fitness//daily.json"
      (slurp)
      (json/parse-string true)))

(defn get-date []
  (println "Date (enter for today) [YYYY-MM-DD]: ")
  (let [date (read-line)]
    (if (= "" date)
      (java.time.LocalDate/now)
      (java.time.LocalDate/parse date))))

(defn get-number-of-laps []
  (println "Number of laps (enter for 10): ")
  (let [num-laps (read-line)]
    (if (= "" num-laps)
      10
      (Integer/parseInt num-laps))))

(defn get-total-time [total]
  (let [mins (quot (.toSeconds total) 60)
        seconds (->> (.minusSeconds total (* 60 (.toMinutes total)))
                     .getSeconds)
        ms (-> total
               (.minusSeconds (+ (* mins 60) seconds))
               (.toMillis))]
    (str (format "%02d" mins)
         ":"
         (format "%02d" seconds)
         "."
         (format "%03d" ms))))

(defn print-lap-summary [laps]
  (let [total-time (->> (map :time-ms laps)
                        (reduce +)
                        (java.time.Duration/ofMillis))]
    (println "Total time: " (get-total-time total-time))
    (pprint/print-table (map (fn [lap] (dissoc lap :time-ms)) laps))))

(defn sum-milliseconds [[m s ms]]
  (+ (* m 60 1000) (* s 1000) ms))

(defn to-ms [t]
  (->> (re-seq #"(\d+):(\d+).(\d+)" t)
       (first)
       (rest)
       (map #(Integer/parseInt %))
       sum-milliseconds))

(defn get-laps
  ([num-laps] (get-laps (range 1 (inc num-laps)) []))
  ([num-laps laps]
   (if (seq num-laps)
     (do
       (println (str "Lap " (first num-laps) " [mm-ss-zz]: "))
       (let [lap (str (read-line) "0")]
         (recur (rest num-laps) (conj laps {:lap (first num-laps)
                                            :time lap
                                            :time-ms (to-ms lap)}))))
     laps)))

(defn get-weight []
  (println "Weight (kg): ")
  (let [weight (read-line)]
    (Double/parseDouble weight)))

(defn replace-lap [laps lap lap-no]
  (concat (subvec laps 0 (dec lap-no)) [{:lap lap-no :time lap :time-ms (to-ms lap)}] (subvec laps lap-no)))

(defn confirm [laps]
  (println "Accept [Y/N]")
  (if (= "Y" (read-line))
    laps
    (loop [laps laps]
      (println "Which lap to correct?")
      (let [lap-no (Integer/parseInt (read-line))]
        (println "Enter new time for lap " (str lap-no))
        (let [new-time (str (read-line) "0")
              laps (replace-lap laps new-time lap-no)]
          (print-lap-summary laps)
          (println "Accept [Y/N]")
          (if (= "Y" (read-line))
            laps
            (recur (vec laps))))))))

(defn todays-stats []
  (let [date       (get-date)
        num-laps   (get-number-of-laps)
        laps       (get-laps num-laps)
        weight     (get-weight)]
    (print-lap-summary laps)
    {:date   (.toString date)
     :weight weight
     :laps   (confirm laps)}))

(defn get-hill-type []
  (println "Hill Type Munro [M], Corbett [C], Sub2ker [S]")
  (let [hill-type (read-line)]
    (cond (= hill-type "M")
          :munro
          
          (= hill-type "C")
          :corbett
          
          (= hill-type "S")
          :sub2ker
          
          :else
          (get-hill-type))))

(defn get-mountain []
  (println "Mountain name: ")
  (let [mountain (read-line)
        date (get-date)
        hill-type (get-hill-type)]
    {:mountain mountain
     :date (.toString date)
     :hill-type hill-type}))

(defn get-type-of-input []
  (println "Mountain [M] or Stairs [S]?")
  (let [input (read-line)]
    (cond (= input "M")
          :mountain
          (= input "S")
          :stairs
          :else
          (do
            (println "Invalid input.")
            (get-type-of-input)))))

(defn -main [& _]
  (let [stats      (load-json-file)
        input-type (get-type-of-input)]
    (spit  #_"//home//stuart//Source//stuartstein777.github.io//fitness//daily.json"
           "debug-daily.json"
           (cond (= input-type :stairs)
                 (-> (update stats :days conj (todays-stats))
                     (json/generate-string {:date-format "yyyy-MM-dd"}))
                 (= input-type :mountain)
                 (-> (update stats :mountains conj (get-mountain))
                     (json/generate-string {:date-format "yyyy-MM-dd"}))))))

(-main)