import router from 'next/router';

import { StudentPlan } from '../../../modules/common/data';

export type PlanCardProps = {
  id: string;
  plan: StudentPlan;
};

export default function PlanCard({ id, plan }: PlanCardProps) {
  const { title, major, semesters } = plan;
  const semesterCount = semesters.length;

  const handlePlanClick = () => {
    router.push(`/app/plans/${id}`);
  };
  return (
    <button
      onClick={handlePlanClick}
      className="bg-white text-left w-[300px] h-[100px] flex flex-col px-8 justify-center rounded-2xl shadow-2xl"
    >
      <h4>{title}</h4>
      <p>B.S. in Computer Science</p>
    </button>
  );
}
