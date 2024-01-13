import { For, createResource } from "solid-js";
import "./app.css";
import DataCardComponent from "./components/data-card/data-card";
import ProfileCardComponent from "./components/profil-card/profile-card";
import { ContextProvider } from "./contexts/context";
import { dataService } from "./services/service";

export default function App() {
  const [data] = createResource<any[], string>(dataService)

  return (
      <main class="dark-blue">
        <ContextProvider>
          <div class="card-wrapper">
            <ProfileCardComponent />
            <For each={data()}>
              {(data) => {
                return (<DataCardComponent card={data} />)  
              }}
            </For>
          </div>
        </ContextProvider>
      </main>
  );
}
