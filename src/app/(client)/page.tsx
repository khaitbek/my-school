import { Container } from "@/components";
import UserList from "@/components/UserList/UserList";

export default async function Home() {
  return (
    <section className="py-12">
      <Container>
        <UserList />
      </Container>
    </section>
  )
}
