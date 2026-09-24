import React, { useState } from "react";
import {
  Text,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

import { useTasks } from "../context/TaskContext";
import { styles } from "../styles/addTaskStyles";

export default function AddTaskScreen() {
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleAddTask = () => {
    if (!title || !subject) {
      Alert.alert(
        "Error",
        "Please fill in all required fields."
      );
      return;
    }

    addTask({
      title,
      subject,
      deadline,
      description,
      priority,
    });

    setTitle("");
    setSubject("");
    setDeadline("");
    setDescription("");
    setPriority("");

    Alert.alert(
      "Success",
      "Task Added Successfully!"
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 40,
      }}
    >
      <Text style={styles.title}>
        Add New Task
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Subject"
        value={subject}
        onChangeText={setSubject}
      />

      <TextInput
        style={styles.input}
        placeholder="Deadline (YYYY-MM-DD)"
        value={deadline}
        onChangeText={setDeadline}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.priorityLabel}>
        Priority
      </Text>

      <View style={styles.priorityContainer}>
        <TouchableOpacity
          style={[
            styles.priorityButton,
            priority === "High" &&
              styles.selectedPriority,
          ]}
          onPress={() =>
            setPriority("High")
          }
        >
          <Text
            style={[
              styles.priorityText,
              priority === "High" &&
                styles.selectedPriorityText,
            ]}
          >
            High
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.priorityButton,
            priority === "Medium" &&
              styles.selectedPriority,
          ]}
          onPress={() =>
            setPriority("Medium")
          }
        >
          <Text
            style={[
              styles.priorityText,
              priority === "Medium" &&
                styles.selectedPriorityText,
            ]}
          >
            Medium
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.priorityButton,
            priority === "Low" &&
              styles.selectedPriority,
          ]}
          onPress={() =>
            setPriority("Low")
          }
        >
          <Text
            style={[
              styles.priorityText,
              priority === "Low" &&
                styles.selectedPriorityText,
            ]}
          >
            Low
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddTask}
      >
        <Text style={styles.addButtonText}>
          Add Task
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}