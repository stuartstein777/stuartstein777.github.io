(ns fitness-term.core
  (:require [cheshire.core :as json]))

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

(defn get-weight []
  (println "Weight (kg): ")
  (let [weight (read-line)]
    (Double/parseDouble weight)))

(defn todays-stats []
  (let [date (get-date)
        num-laps (get-number-of-laps)
        laps (get-laps num-laps)
        total-time (->> (map :time-ms laps)
                        (reduce +)
                        (java.time.Duration/ofMillis))
        weight (get-weight)]
    (println "Total time: " (get-total-time total-time))
    (println "Laps::")
    (clojure.pprint/print-table (map (fn [lap] (dissoc lap :time-ms)) laps))
    (println "Accept? [Y/N]")
    (when (= "Y" (read-line))
      {:date (.toString date)
       :weight weight
       :laps laps})))

(defn -main [& _]
  (let [stats (load-json-file)
        today (todays-stats)]
    (spit  "//home//stuart//Source//stuartstein777.github.io//fitness//daily.json"
           (-> (update stats :days conj today)
               (json/generate-string {:date-format "yyyy-MM-dd"})))))

(-main)