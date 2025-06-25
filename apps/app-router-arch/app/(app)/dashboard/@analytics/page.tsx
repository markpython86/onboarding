import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
};

function StatCard({ title, value, change }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <p className="text-sm text-green-600">{change}</p>
      </CardContent>
    </Card>
  );
}

export default function AnalyticsSlot() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            Site Analytics
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <StatCard title="Total Projects" value="3" change="+1 this month" />
          <StatCard title="Site Views" value="1,204" change="+15% this month" />
          <StatCard title="Contact Forms" value="28" change="+5% this month" />
          <StatCard
            title="Avg. Time on Site"
            value="2m 15s"
            change="-3% this month"
          />
        </div>
      </CardContent>
    </Card>
  );
}
