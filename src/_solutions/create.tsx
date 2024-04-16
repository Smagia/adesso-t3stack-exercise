import { useRouter } from "next/router";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { api } from "~/utils/api";

export default function AdminPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();

  const createEvent = api.event.create.useMutation({
    onSuccess: async () => {
      await router.push("/");
    },
  });
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (selectedDate && title) {
            createEvent.mutate({ name: title, date: selectedDate });
          }
        }}
        className="flex w-full max-w-xl flex-col gap-2 rounded-xl border p-5 shadow-md"
      >
        <div>
          <h2>Select Date</h2>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date) => {
              setSelectedDate(date);
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
          />
        </div>
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write text..."
          className="w-full rounded-xl border p-2"
        />
        <button
          type="submit"
          className="rounded-2xl bg-blue-600 px-6 py-2 text-center text-lg text-white hover:bg-opacity-80"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}
