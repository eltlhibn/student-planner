import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3FF",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6D28D9",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#DDD6FE",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,

    elevation: 2,
  },

  priorityLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4C1D95",
    marginBottom: 10,
    marginTop: 5,
  },

  priorityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  priorityButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDD6FE",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 4,
  },

  selectedPriority: {
    backgroundColor: "#6D28D9",
    borderColor: "#6D28D9",
  },

  priorityText: {
    color: "#4B5563",
    fontWeight: "500",
  },

  selectedPriorityText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  addButton: {
    backgroundColor: "#6D28D9",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});