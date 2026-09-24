import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";

import { useTasks } from "../context/TaskContext";

export default function HomeScreen() {
  const {
    tasks,
    toggleComplete,
    deleteTask,
  } = useTasks();

  const sortedTasks = [...tasks].sort((a, b) =>
    a.deadline.localeCompare(b.deadline)
  );

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Student Planner
      </Text>

      <View style={styles.dashboard}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {tasks.length}
          </Text>

          <Text style={styles.statLabel}>
            Total
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {pendingTasks}
          </Text>

          <Text style={styles.statLabel}>
            Pending
          </Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {completedTasks}
          </Text>

          <Text style={styles.statLabel}>
            Completed
          </Text>
        </View>
      </View>

      <FlatList
        data={sortedTasks}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>
            📝 No tasks yet

            {"\n\n"}

            Create your first task from
            the Add Task tab.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>
              {item.title}
            </Text>

            <Text style={styles.infoText}>
              Subject: {item.subject}
            </Text>

            <Text style={styles.infoText}>
              Deadline: {item.deadline}
            </Text>

            <Text style={styles.infoText}>
              Priority: {item.priority || "Low"}
            </Text>

            <Text style={styles.description}>
              {item.description || "No description"}
            </Text>

            <View
              style={[
                styles.statusBadge,
                item.completed
                  ? styles.completedStatus
                  : styles.pendingStatus,
              ]}
            >
              <Text style={styles.statusText}>
                {item.completed
                  ? "Completed"
                  : "Pending"}
              </Text>
            </View>

            <View style={styles.actionRow}>
              <Text
                style={styles.completeButton}
                onPress={() =>
                  toggleComplete(item.id)
                }
              >
                {item.completed
                  ? "Mark Pending"
                  : "Mark Complete"}
              </Text>

              <Text
                style={styles.deleteButton}
                onPress={() =>
                  Alert.alert(
                    "Delete Task",
                    "Are you sure you want to delete this task?",
                    [
                      {
                        text: "Cancel",
                        style: "cancel",
                      },
                      {
                        text: "Delete",
                        onPress: () =>
                          deleteTask(item.id),
                      },
                    ]
                  )
                }
              >
                Delete
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F3FF",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6D28D9",
    marginBottom: 20,
  },

  dashboard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 15,
    marginHorizontal: 4,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6D28D9",
  },

  statLabel: {
    marginTop: 4,
    color: "#6B7280",
  },

  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#6B7280",
    fontSize: 16,
    lineHeight: 24,
  },

  taskCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 4,
  },

  taskTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4C1D95",
    marginBottom: 10,
  },

  infoText: {
    fontSize: 15,
    marginBottom: 5,
    color: "#374151",
  },

  description: {
    marginTop: 8,
    marginBottom: 8,
    color: "#6B7280",
    lineHeight: 20,
  },

  statusBadge: {
    alignSelf: "flex-start",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 8,
    marginBottom: 10,
  },

  completedStatus: {
    backgroundColor: "#10B981",
  },

  pendingStatus: {
    backgroundColor: "#F59E0B",
  },

  statusText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },

  completeButton: {
    backgroundColor: "#6D28D9",
    color: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontWeight: "600",
    marginRight: 10,
    overflow: "hidden",
  },

  deleteButton: {
    backgroundColor: "#EF4444",
    color: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontWeight: "600",
    overflow: "hidden",
  },
});