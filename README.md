<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Unser Jahrestag" />
    <title>Unser Jahrestag 💜</title>
  </head>
  <body>
    <noscript>Du benötigst JavaScript um diese Website zu nutzen.</noscript>
    <div id="root"></div>
  </body>
</html>
.app-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%);
  overflow-x: hidden;
}

.content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

.title-3d {
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 40px;
  background: linear-gradient(45deg, #ff1493, #ff69b4, #ff1493);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  transform: perspective(1000px) rotateX(10deg);
  animation: fadeIn 0.8s ease-out;
  letter-spacing: 2px;
}

.section {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  margin: 40px 0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.8s ease-out;
}

.section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 25px;
  color: #8b5cf6;
}

.confetti {
  position: fixed;
  font-size: 30px;
  pointer-events: none;
  z-index: 1000;
}

@media (max-width: 768px) {
  .title-3d {
    font-size: 2.5rem;
  }

  .section {
    padding: 20px;
    margin: 30px 0;
  }

  .section h2 {
    font-size: 1.5rem;
  }
}
