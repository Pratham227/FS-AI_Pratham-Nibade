# RouteMate AI - Student Commute Optimizer

**Domain:** Full Stack + AI/ML  
**Problem Statement:**  
Students often commute individually, which is costly, time-consuming, and polluting.  
RouteMate AI is a carpooling & route-sharing platform designed specifically for students, combining **full stack web development** with **AI-powered smart matching**.

---

## 🚀 Solution Overview

### Frontend (React + Tailwind + Leaflet)
- Students enter **home & destination**.
- Map displays their **route** + **nearby students** with anonymous usernames.
- Clicking a student opens a **chat modal**.

### Backend (FastAPI)
- REST APIs for register, matches, chat.
- Stores student trips anonymously.
- Integrates AI module for smarter matching.

### AI Module (Python)
- Uses **K-Means clustering** to group students by commute similarity.
- Better than simple distance-based approach.

### Database
- SQLite (hackathon-friendly) or MySQL (production).
- Stores user_id, anonymous username, home_lat, home_lon, dest_lat, dest_lon.

### Chat Service
- Firebase Realtime DB (quick) OR FastAPI WebSockets.

---

## 🏗️ High-Level Architecture

![Architecture](diagrams/architecture.png)

---

## 📈 Workflow

1. Student registers with home + destination.  
2. Backend assigns **unique anonymous username**.  
3. Backend compares routes using AI clustering → suggests best matches.  
4. Frontend displays matches on map.  
5. Student clicks → opens chat.  

![Workflow](diagrams/workflow.png)

---

## 🧑‍💻 Pseudo Code

### Route Matching (Distance-based)
```pseudo
function find_matches(home, dest, radius_km):
    matches = []
    for student in database:
        dh = haversine(home, student.home)
        dd = haversine(dest, student.dest)
        if dh <= radius_km AND dd <= radius_km:
            matches.add(student)
    return matches
```

### AI Route Clustering
```pseudo
function cluster_routes(student_routes, K):
    # student_routes = [home_lat, home_lon, dest_lat, dest_lon]
    model = KMeans(n_clusters=K)
    model.fit(student_routes)
    labels = model.predict(student_routes)
    return groups of students by labels
```

---

## ⚖️ Trade-offs

- **Matching**
  - Distance formula → simple, fast.
  - AI clustering → smarter, accurate, but slightly heavier.
- **Database**
  - SQLite → fast setup, good for demo.
  - MySQL → scalable, production-ready.
- **Chat**
  - Firebase → quick setup, reliable.
  - WebSocket → full control, more setup time.
