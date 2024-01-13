import { createResource, For } from "solid-js";
import DataCardComponent from "~/components/data-card/data-card";
import ProfileCardComponent from "~/components/profil-card/profile-card";
import { ContextProvider } from "~/contexts/context";
import { dataService } from "~/services/service";

export default function Home() {
  const [data] = createResource<any[], string>(dataService)
// <DataCardComponent card={data} />
/**
 *           <For each={data()}>
            {data =>
              <li>{data.title}</li>
            }
          </For>
 */
  return (
    <main class="dark-blue">
      <ContextProvider>
        <div class="card-wrapper">
          <ProfileCardComponent />
          <DataCardComponent card={data[0]} />
          <DataCardComponent card={data[1]} />
          <DataCardComponent card={data[2]} />
          <DataCardComponent card={data[3]} />
          <DataCardComponent card={data[4]} />
          <DataCardComponent card={data[5]} />
        </div>
      </ContextProvider>
    </main>

);
}
