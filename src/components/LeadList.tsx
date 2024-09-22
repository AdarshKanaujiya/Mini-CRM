import LeadItem from './LeadItem';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
}

interface LeadListProps {
  leads: Lead[];
}

const LeadList: React.FC<LeadListProps> = ({ leads }) => {
  return (
    <div className="p-6 space-y-4 bg-gray-100 rounded-lg">
      {leads.map(lead => (
        <LeadItem key={lead.id} lead={lead} />
      ))}
    </div>
  );
};

export default LeadList;
