import Card from '../Components/Card'
import { useContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const {state} = useContextGlobal();
  return (
    <main className="" >
      <h1>Home</h1>
      {
        state.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="card-grid">
            {state.data.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        )
      }
    </main>
  )
}

export default Home