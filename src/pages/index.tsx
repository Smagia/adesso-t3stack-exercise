import { useEffect, useState } from "react";
import { api } from "~/utils/api";
import EventCard from "./_ui/event_card";
import router from "next/router";
import type { PizzaEvent } from "~/models/pizza-model";

export default function Home() {
  const [events, setEvents] = useState<PizzaEvent[]>([]);

  // Called on the begin
  useEffect(() => {
    // todo implement event list update
  }, []);

  return (
    <div className="flex h-screen min-h-screen w-full justify-between items-center">
      <div className="flex h-screen w-full flex-col items-center justify-start gap-7 p-4 text-lg">
        {events && events.length > 0 ? (
          <>
            <p className="text-2xl">Next Pizza Event</p>
            <div className="flex h-full w-full flex-col items-center overflow-y-auto gap-4">
              {events.map((event: PizzaEvent, index) => (
                <EventCard
                  key={index}
                  props={{ event: event }}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="text-2xl">No Event Scheduled!</p>
        )}
      </div>
      <div className="flex h-full w-full flex-col items-center justify-start p-4 gap-4">
        <p className="text-2xl">Create a new event</p>
        <button
          className="rounded-2xl bg-blue-600 px-6 py-2 text-center text-lg text-white hover:bg-opacity-80"
          onClick={async (e) => {
            e.preventDefault();
            await router.push("/create");
          }}
        >
          Create Event
        </button>
      </div>
    </div>
  );
}
