import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F3FF",
  },

  title: {
    fontSize: 24,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#4C1D95",
    marginBottom: 8,
  },

  info: {
    fontSize: 14,
    marginBottom: 4,
    color: "#374151",
  },

  completed: {
    marginTop: 10,
    alignSelf: "flex-start",
    backgroundColor: "#10B981",
    color: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    overflow: "hidden",
    fontWeight: "bold",
  },
});