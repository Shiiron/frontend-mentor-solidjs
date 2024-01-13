import { createResource, For } from "solid-js";
import DataCardComponent from "~/components/data-card/data-card";
import ProfileCardComponent from "~/components/profil-card/profile-card";
import { ContextProvider } from "~/contexts/context";
import { dataService } from "~/services/service";

export default function Home() {
  const [data] = createResource<any[], string>(dataService)
// <DataCardComponent card={data} />
  return (
    <main class="dark-blue">
      <ContextProvider>
        <div class="card-wrapper">
          <ProfileCardComponent />
          <For each={data()}>
            {data =>
              <li>{data.title}</li>
            }
          </For>
        </div>
      </ContextProvider>
    </main>

);
}
