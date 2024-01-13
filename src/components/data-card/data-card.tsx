import { Card } from "~/models/card";
import "./data-card.css";
import { useTimeContext } from "~/contexts/context";

interface CardProps {
  card: Card
}

export default function DataCardComponent(props: any) {
  const { context }: any = useTimeContext()
  const classes = `${props.card.title.toLowerCase()} data-wrapper`
  const imgSrc = `/icon-${props.card.title.toLowerCase() ==='self care' ? 'self-care' : props.card.title.toLowerCase()}.svg`
  const getLabel = (label: string) => {
    if (label === 'daily') {
      return 'Yesterday'
    } else if (label === 'weekly') {
      return 'Last Week';
    } else {
      return 'Last Month';
    }
  }
  return (
    <div class={classes}>
      <img class="section-logo" src={imgSrc} />
      <div class="data-container very-dark-blue">
        <span style="font-size: 1.125rem; display: block">{props.card.title}</span>
        <div class="align-right">
          <img src="./src/assets/icon-ellipsis.svg" alt="ellipsis" />
        </div>
        <span class="data-value">{props.card.timeframes[context()].current} Hrs</span>
        <span class="data-previous pale-blue align-right">{getLabel(context())} - {props.card.timeframes[context()].previous} hrs</span>
      </div>
    </div>
  );
}