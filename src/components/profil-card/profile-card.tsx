import "./profile-card.css";
import { useTimeContext } from "~/contexts/context";

export default function ProfileCardComponent() {
    const { context, setContext }: any = useTimeContext()
    return (
        <div class="profile-card very-dark-blue">
            <div class="blue profile">
                <img src="/image-jeremy.png" alt="profile picture" />

                <div>
                    <span class="pale-blue" style="display: block">Report for</span>
                    <span class="profile-name">Jeremy Robson</span>
                </div>
            </div>
            <div class="menu">
                <ul>
                    <li
                        onClick={() => setContext('daily')}
                        classList={{selected: context() === 'daily'}}>
                            Daily
                    </li>
                    <li
                        onClick={() => setContext('weekly')}
                        classList={{selected: context() === 'weekly'}}>
                            Weekly
                    </li>
                    <li
                        onClick={() => setContext('monthly')}
                        classList={{selected: context() === 'monthly'}}>
                            Monthly
                    </li>
                </ul>
            </div>
        </div>
  );
}