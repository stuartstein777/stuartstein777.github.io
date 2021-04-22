(use '[clojure.java.shell :only [sh]])

(sh "git" "add" "--all")
(sh "git" "commit" "-m" (first *command-line-args*))
(sh "git" "push" "-u" "origin" "master")
