import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

type Profile = {
  id: number
  name: string
  title: string
  tagline: string
  email: string
  avatar: string
}

const profiles: Profile[] = [
  {
    id: 1,
    name: 'Jhon Doe',
    title: 'Web Developer',
    tagline: 'A kiddo who uses Bootstrap and Laravel in web development.',
    email: 'abc@example.com',
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
  },
  {
    id: 2,
    name: 'Jhon Doe',
    title: 'Web Developer',
    tagline: 'A kiddo who uses Bootstrap and Laravel in web development.',
    email: 'abc@example.com',
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
  },
  {
    id: 3,
    name: 'Jhon Doe',
    title: 'Frontend Engineer',
    tagline: 'Building delightful UIs with React and TypeScript.',
    email: 'abc@example.com',
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
  },
  {
    id: 4,
    name: 'Jhon Doe',
    title: 'UI/UX Designer',
    tagline: 'Designing accessible interfaces for everyone.',
    email: 'abc@example.com',
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
  },
  {
    id: 5,
    name: 'Jhon Doe',
    title: 'Fullstack Developer',
    tagline: 'Types, tests, and tidy code.',
    email: 'abc@example.com',
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
  },
  {
    id: 6,
    name: 'Jhon Doe',
    title: 'Software Engineer',
    tagline: 'Crafting reliable systems and smooth UX.',
    email: 'abc@example.com',
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
  },
]

function ProfileCard({ person }: { person: Profile }) {
  const handleMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    target.style.setProperty('--mx', x + '%')
    target.style.setProperty('--my', y + '%')
  }

  return (
    <Card
      className="profile-card position-relative h-100 fade-up"
      data-stagger={person.id}
      onMouseMove={handleMove}
    >
      <span className="glass-ring" />
      <Card.Body className="text-center d-flex flex-column gap-2 align-items-center">
        <img className="profile-card__avatar" src={person.avatar} alt={person.name} />
        <Card.Title as="h2" className="h4 mt-2 profile-card__title">
          {person.name}
        </Card.Title>
        <div className="profile-card__subtitle">{person.title}</div>
        <Card.Text className="mt-2 profile-card__note text-center small px-2">
          {person.tagline}
        </Card.Text>
        <div className="small text-light-emphasis">{person.email}</div>
        <div className="d-flex gap-2 mt-2 profile-card__icons">
          <a aria-label="Twitter" href="#"><FaTwitter /></a>
          <a aria-label="Instagram" href="#"><FaInstagram /></a>
          <a aria-label="LinkedIn" href="#"><FaLinkedinIn /></a>
          <a aria-label="GitHub" href="#"><FaGithub /></a>
        </div>
      </Card.Body>
    </Card>
  )
}

export default function App() {
  return (
    <main className="dot-grid section-padding">
      <Container>
        <Row className="g-4">
          {profiles.map((p) => (
            <Col key={p.id} xs={12} sm={6} lg={4}>
              <ProfileCard person={p} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  )
}
