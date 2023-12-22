export default function ProjectCard({ header, body, footer }) {
  return (
    <div class="card" style={{ width: "500px" }}>
      <div class="card__header">
        <h4>{header}</h4>
      </div>
      <div class="card__body">{body}</div>
      <div class="card__footer">{footer}</div>
    </div>
  );
}
