Sure! Here's the `README.md` content, ready to copy and paste directly:

```markdown
# Contest Platform

A fullstack coding contest platform built with:

- **Frontend**: Next.js (Vercel)
- **Backend**: Spring Boot (Java 21), deployed on Render
- **Database**: PostgreSQL (Docker or Render PostgreSQL)

---

## 🚀 Features

- Create coding contests and problems
- Submit solutions for problems
- View submission results
- RESTful backend APIs
- Frontend UI with React (Next.js)

---

## 🧱 Project Structure

```

contest-platform/
│
├── backend/                 # Spring Boot API
│   ├── Dockerfile
│   └── src/
│
├── frontend/                # Next.js React App
│   ├── pages/
│   └── components/
│
├── docker-compose.yml       # For local PostgreSQL container
└── README.md

````

---

## 🖥️ Local Development

### Prerequisites

- Java 21
- Node.js 18+
- Docker + Docker Compose

### 1. Start PostgreSQL in Docker

```bash
docker run -d \
  --name pg-shodh \
  -e POSTGRES_USER=user \
  -e POSTGRES_PASSWORD=pass \
  -e POSTGRES_DB=shodh \
  -p 5433:5432 \
  postgres:13
````

### 2. Backend Setup

```bash
cd backend
./mvnw clean package
java -jar target/app.jar
```

Update your `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5433/shodh
spring.datasource.username=user
spring.datasource.password=pass
```

Enable global CORS:

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
        .allowedOrigins("https://your-frontend.vercel.app")
        .allowedMethods("*")
        .allowedHeaders("*");
  }
}
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Add this to `frontend/package.json`:

```json
"proxy": "http://localhost:8080"
```

---

## 🌐 Deployment

### Backend on Render

* Create a new Web Service on Render
* Use Docker for Java 21
* Add environment variables:

  * `SPRING_DATASOURCE_URL=jdbc:postgresql://<db-host>:5432/shodh`
  * `SPRING_DATASOURCE_USERNAME=user`
  * `SPRING_DATASOURCE_PASSWORD=pass`

### Frontend on Vercel

* Deploy the `frontend` directory
* Add `NEXT_PUBLIC_API_URL=https://your-backend.onrender.com` in environment variables

---

## 🛠️ API Endpoints

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| POST   | /problems    | Create a problem |
| POST   | /contests    | Create a contest |
| POST   | /submissions | Submit code      |
| GET    | /submissions | List submissions |

---

## 🔧 CORS / 405 Fix

Make sure:

* Global CORS config is enabled
* Vercel frontend domain is whitelisted
* Requests use `Content-Type: application/json`

---

## 🧪 Example API Test (curl)

```bash
curl -X POST http://localhost:8080/problems \
  -H "Content-Type: application/json" \
  -d '{"title": "Two Sum", "statement": "Find indices..."}'
```

---


