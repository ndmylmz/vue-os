<script>
  export default {
    data() {
      return {
        metricsValues: [{
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
                inProgress: {
                  duration: "1 day(s), 12 hours, 2 minutes, 23 seconds",
                  tasksCount: 56,
                  tasksLists: [{
                      tasksCode: "OPT-10029",
                      assignee: "APAC OPAM",
                      developer: "John Dev",
                      qa: "Koroglu QA",
                      opam: "Nasreddin OPAM",
                      timeSpent: "23 hours, 45 minutes, 15 seconds"
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
                },
                devDone: {
                  duration: "1 day(s), 12 hours, 56 minutes, 31 seconds",
                  tasksCount: 59,
                  tasksLists: [{
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
                    }
                  ]
                }
              }
            }
          },
          {
            response: {
              status: 500
            },
            data: {
              overall: {
                average: 22,
                taskCount: 22,
                crCount: 22,
                qaCount: 22
              },
              types: {
                inProgress: {
                  duration: "2 day(s), 22 hours, 22 minutes, 22 seconds",
                  tasksCount: 22,
                  tasksLists: [{
                      tasksCode: "OPT-10029",
                      assignee: "APAC OPAM",
                      developer: "John Dev",
                      qa: "Koroglu QA",
                      opam: "Nasreddin OPAM",
                      timeSpent: "23 hours, 45 minutes, 15 seconds"
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
                },
                devDone: {
                  duration: "1 day(s), 12 hours, 56 minutes, 31 seconds",
                  tasksCount: 59,
                  tasksLists: [{
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
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  }
</script>
