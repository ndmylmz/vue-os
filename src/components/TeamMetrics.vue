<template>
  <div class="row metrics">
    <div class="col">
      <statistics :teamMetrics="teamMetrics"></statistics>
    </div>
    <!-- <div class="col">
      <statistics></statistics>
    </div>
    <div class="col">
      <statistics></statistics>
    </div> -->
  </div>
</template>


<script>
import Statistics from "./Statistics.vue";

export default {
  props: ["teamName"],
  components: {
    statistics: Statistics
  },
  data() {
    return {
      teamMetrics: {
        response: {
          status: 500
        },
        data: {
          overall: {
            average: 56,
            taskCount: 58,
            crCount: 59,
            qaCount: 60
          },
          types: {
            inProgress: 
              {
                duration: "1 day(s), 12 hours, 2 minutes, 23 seconds",
                tasksCount: 56,
                tasksLists: [
                  {
                    tasksCode: "OPT-10029",
                    assignee: "APAC OPAM",
                    developer: "John Dev",
                    qa: "Koroglu QA",
                    opam: "Nasreddin OPAM",
                    timeSpent: "23 hours, 45 minutes, 15 seconds"
                  },
                  {
                    tasksCode: "OPT-10058",
                    assignee: "APAC OPAM",
                    developer: "Cato Dev",
                    qa: "Yunus Emre QA",
                    opam: "Enver Pasha OPAM",
                    timeSpent: "13 hours, 17 minutes, 56 seconds"
                  },
                  {
                    tasksCode: "OPT-10028",
                    assignee: "TURKEY OPAM",
                    developer: "Emre Dev",
                    qa: "Orhan Pamuk QA",
                    opam: "Adnan Oktar OPAM",
                    timeSpent: "20 hours, 46 minutes, 20 seconds"
                  },
                  {
                    tasksCode: "OPT-10052",
                    assignee: "AFRICA OPAM",
                    developer: "Bumblebee Dev",
                    qa: "Koroglu QA",
                    opam: "Enver Pasha OPAM",
                    timeSpent: "6 hours, 52 minutes, 0 seconds"
                  },
                  {
                    tasksCode: "OPT-10071",
                    assignee: "TURKEY OPAM",
                    developer: "Bumblebee Dev",
                    qa: "Karagoz QA",
                    opam: "Adnan Oktar OPAM",
                    timeSpent: "22 hours, 57 minutes, 29 seconds"
                  },
                  {
                    tasksCode: "OPT-10017",
                    assignee: "MENA OPAM",
                    developer: "Cato Dev",
                    qa: "Yunus Emre QA",
                    opam: "Adnan Oktar OPAM",
                    timeSpent: "4 hours, 48 minutes, 32 seconds"
                  },
                  {
                    tasksCode: "OPT-10077",
                    assignee: "APAC OPAM",
                    developer: "Emre Dev",
                    qa: "Orhan Pamuk QA",
                    opam: "Emre Spartan OPAM",
                    timeSpent: "7 hours, 52 minutes, 47 seconds"
                  },
                  {
                    tasksCode: "OPT-10041",
                    assignee: "AFRICA OPAM",
                    developer: "Jack Dev",
                    qa: "Fatih Terim QA",
                    opam: "Nasreddin OPAM",
                    timeSpent: "22 hours, 50 minutes, 42 seconds"
                  },
                  {
                    tasksCode: "OPT-10041",
                    assignee: "AFRICA OPAM",
                    developer: "Emre Dev",
                    qa: "Yunus Emre QA",
                    opam: "Nasreddin OPAM",
                    timeSpent: "15 hours, 38 minutes, 21 seconds"
                  },
                  {
                    tasksCode: "OPT-10002",
                    assignee: "APAC OPAM",
                    developer: "Lorem Dev",
                    qa: "Karagoz QA",
                    opam: "Emre Spartan OPAM",
                    timeSpent: "23 hours, 25 minutes, 49 seconds"
                  }
                ]
              }
            ,
            devDone: 
              {
                duration: "1 day(s), 12 hours, 56 minutes, 31 seconds",
                tasksCount: 59,
                tasksLists: [
                  {
                    tasksCode: "OPT-10072",
                    assignee: "TURKEY OPAM",
                    developer: "Cato Dev",
                    qa: "Fatih Terim QA",
                    opam: "Enver Pasha OPAM",
                    timeSpent: "0 hours, 45 minutes, 11 seconds"
                  },
                  {
                    tasksCode: "OPT-10069",
                    assignee: "APAC OPAM",
                    developer: "Lorem Dev",
                    qa: "Fatih Terim QA",
                    opam: "Enver Pasha OPAM",
                    timeSpent: "17 hours, 33 minutes, 0 seconds"
                  },
                  {
                    tasksCode: "OPT-10025",
                    assignee: "EUROPE OPAM",
                    developer: "John Dev",
                    qa: "Fatih Terim QA",
                    opam: "Adnan Oktar OPAM",
                    timeSpent: "8 hours, 19 minutes, 56 seconds"
                  },
                  {
                    tasksCode: "OPT-10076",
                    assignee: "EUROPE OPAM",
                    developer: "Bumblebee Dev",
                    qa: "Fatih Terim QA",
                    opam: "Volkan OPAM",
                    timeSpent: "18 hours, 17 minutes, 23 seconds"
                  },
                  {
                    tasksCode: "OPT-10023",
                    assignee: "APAC OPAM",
                    developer: "Emre Dev",
                    qa: "Fatih Terim QA",
                    opam: "Nasreddin OPAM",
                    timeSpent: "15 hours, 53 minutes, 55 seconds"
                  },
                  {
                    tasksCode: "OPT-10085",
                    assignee: "EUROPE OPAM",
                    developer: "Lorem Dev",
                    qa: "Karagoz QA",
                    opam: "Enver Pasha OPAM",
                    timeSpent: "15 hours, 26 minutes, 19 seconds"
                  },
                  {
                    tasksCode: "OPT-10048",
                    assignee: "EUROPE OPAM",
                    developer: "Bumblebee Dev",
                    qa: "Fatih Terim QA",
                    opam: "Adnan Oktar OPAM",
                    timeSpent: "2 hours, 22 minutes, 16 seconds"
                  },
                  {
                    tasksCode: "OPT-10007",
                    assignee: "APAC OPAM",
                    developer: "Emre Dev",
                    qa: "Karagoz QA",
                    opam: "Adnan Oktar OPAM",
                    timeSpent: "7 hours, 1 minutes, 40 seconds"
                  },
                  {
                    tasksCode: "OPT-10089",
                    assignee: "EUROPE OPAM",
                    developer: "Jack Dev",
                    qa: "Karagoz QA",
                    opam: "Nasreddin OPAM",
                    timeSpent: "0 hours, 9 minutes, 14 seconds"
                  },
                  {
                    tasksCode: "OPT-10100",
                    assignee: "EUROPE OPAM",
                    developer: "John Dev",
                    qa: "Karagoz QA",
                    opam: "Volkan OPAM",
                    timeSpent: "0 hours, 59 minutes, 51 seconds"
                  }
                ]
              }
          }
        }
      }
    };
  },
};
</script>
