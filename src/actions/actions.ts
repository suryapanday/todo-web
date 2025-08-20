"use server";
import { revalidatePath } from "next/cache";
const base_url = "http://127.0.0.1:8000/api/todos/";

export async function getTodosAction() {
  try {
    const response = await fetch(base_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching the data", error);
  }
  revalidatePath("/");
}

export async function createTodoAction(formData: FormData) {
  const title = formData.get("title");
  console.log(formData);
  try {
    await fetch(base_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
      }),
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/");
}

export async function updateTodoAction(formData: FormData) {
  // i want to update is user clicked tik
  // i want to update on chnageing the input
  const title = formData.get("title");
  const id = formData.get("id");
  console.log(formData);

  try {
    const response = await fetch(`${base_url}${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
      }),
    });
    console.log(response);
  } catch (error) {
    console.log("errors", error);
  }
  revalidatePath("/");
}
