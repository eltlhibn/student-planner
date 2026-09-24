import React from "react";
import {
  View,
  Text,
  FlatList,
  Alert,
} from "react-native";

import { useTasks } from "../context/TaskContext";
import { styles } from "../styles/homeStyles";

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