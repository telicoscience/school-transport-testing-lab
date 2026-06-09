interface DashboardCardProps {
  title: string;
  value: string | number;
  description: string;
  trend?: string;
}

export function DashboardCard({ title, value, description, trend }: DashboardCardProps) {
  return (
    <article className="dashboard-card" data-cy="dashboard-card">
      <div>
        <p className="dashboard-card__title">{title}</p>
        <strong className="dashboard-card__value">{value}</strong>
      </div>
      <p className="dashboard-card__description">{description}</p>
      {trend ? <span className="dashboard-card__trend">{trend}</span> : null}
    </article>
  );
}
