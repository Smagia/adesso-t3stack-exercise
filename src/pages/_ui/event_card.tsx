import type { PizzaEvent } from "~/models/pizza-model";

interface EventCardProps {
  event: PizzaEvent;
}

export default function EventCard({ props }: { props: EventCardProps }) {
  return (
    <div
      key={props.event.id}
      className="flex w-full max-w-xl flex-col gap-2 rounded-xl border p-5 shadow-md"
    >
      <p className="font-semibold">{props.event.name}</p>
      <p className="font-semibold">
        When? {props.event.date.toLocaleDateString().toString()}
      </p>
    </div>
  );
}
