export interface PizzaEvent {
  id: number;
  name: string;
  date: Date;
  adminId: string;
}

const choices = ["tomato", "cheese", "ham", "vegetables"];
export const details = [
  {
    title: "1/2 Pizza",
    imageSrc: "/half.png",
    availableChoices: choices,
    shadow: false,
  },
  {
    title: "1 Slice",
    imageSrc: "/slice.png",
    availableChoices: choices,
    shadow: true,
  },
  {
    title: "Complete Pizza",
    imageSrc: "/full.png",
    availableChoices: choices,
    shadow: false,
  },
];
