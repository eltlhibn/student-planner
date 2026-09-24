import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

import { useTasks } from "../context/TaskContext";

export default function CompletedScreen() {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Completed Tasks
      </Text>

      <FlatList
        data={completedTasks}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No completed tasks yet.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.taskTitle}>
              {item.title}
            </Text>

            <Text style={styles.info}>
              Subject: {item.subject}
            </Text>

            <Text style={styles.info}>
              Deadline: {item.deadline}
            </Text>

            <Text style={styles.info}>
              Priority: {item.priority}
            </Text>

            <Text style={styles.completed}>
              Completed
            </Text>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#6D28D9",
    marginBottom: 15,
  },

  empty: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#6B7280",
  },

  card: {
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
    marginBottom: 8,
  },

  info: {
    fontSize: 15,
    marginBottom: 4,
    color: "#374151",
  },

  completed: {
    marginTop: 8,
    fontWeight: "bold",
    color: "#16A34A",
  },
});