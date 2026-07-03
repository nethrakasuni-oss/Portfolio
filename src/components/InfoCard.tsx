type InfoCardProps = {
  title: string;
  value: string;
};

function InfoCard({ title, value }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm text-white/50">{title}</p>
      <p className="mt-2 font-semibold">{value}</p>
    </div>
  );
}

export default InfoCard;