import React from "react";
import {
  View,
  Text,
  FlatList,
} from "react-native";

import { useTasks } from "../context/TaskContext";
import { styles } from "../styles/completedStyles";

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
            ✅ No completed tasks yet.
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