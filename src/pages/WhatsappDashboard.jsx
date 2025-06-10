import React from "react";

export default function WhatsappDashboard() {
  const data = [
    {
      agent: "Ana",
      messages: 120,
      avgResponse: "1m30s",
      rating: 4.8,
    },
    {
      agent: "Bruno",
      messages: 98,
      avgResponse: "2m10s",
      rating: 4.4,
    },
    {
      agent: "Carla",
      messages: 143,
      avgResponse: "55s",
      rating: 4.9,
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Avaliação de Atendimento via WhatsApp
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="py-3 px-4">Atendente</th>
              <th className="py-3 px-4">Mensagens Respondidas</th>
              <th className="py-3 px-4">Tempo Médio</th>
              <th className="py-3 px-4">Avaliação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-b last:border-none">
                <td className="py-2 px-4">{row.agent}</td>
                <td className="py-2 px-4">{row.messages}</td>
                <td className="py-2 px-4">{row.avgResponse}</td>
                <td className="py-2 px-4">{row.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
