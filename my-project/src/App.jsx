import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area 
} from 'recharts';

const dadosGraficoLinha = [
  { nome: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { nome: 'Fev', uv: 3000, pv: 1398, amt: 2010 },
  { nome: 'Mar', uv: 2000, pv: 9800, amt: 1690 },
  { nome: 'Abr', uv: 2780, pv: 3908, amt: 1800 },
  { nome: 'Mai', uv: 1890, pv: 4800, amt: 2081 },
  { nome: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { nome: 'Jul', uv: 3490, pv: 4300, amt: 2800 },
  { nome: 'Ago', uv: 4000, pv: 2400, amt: 2400 },
  { nome: 'Set', uv: 3000, pv: 1398, amt: 1910 },
  { nome: 'Out', uv: 2000, pv: 9800, amt: 2290 },
  { nome: 'Nov', uv: 2780, pv: 3908, amt: 1850 },
  { nome: 'Dez', uv: 1890, pv: 4800, amt: 2181 },
];

const dadosGraficoBarra = [
  { nome: 'Jan', vendas: 4000, devolucoes: 2400 },
  { nome: 'Fev', vendas: 3000, devolucoes: 1398 },
  { nome: 'Mar', vendas: 2000, devolucoes: 9800 },
  { nome: 'Abr', vendas: 2780, devolucoes: 3908 },
  { nome: 'Mai', vendas: 1890, devolucoes: 4800 },
  { nome: 'Jun', vendas: 2390, devolucoes: 3800 },
  { nome: 'Jul', vendas: 3490, devolucoes: 4300 },
  { nome: 'Ago', vendas: 4000, devolucoes: 2400 },
  { nome: 'Set', vendas: 3000, devolucoes: 1398 },
  { nome: 'Out', vendas: 2000, devolucoes: 9800 },
  { nome: 'Nov', vendas: 2780, devolucoes: 3908 },
  { nome: 'Dez', vendas: 1890, devolucoes: 4800 },
];

const dadosGraficoPizza = [
  { nome: 'Produto A', valor: 400 },
  { nome: 'Produto B', valor: 300 },
  { nome: 'Produto C', valor: 300 },
  { nome: 'Produto D', valor: 200 },
];

const totalProdutos = dadosGraficoPizza.reduce((total, produto) => total + produto.valor, 0);

const dadosGraficoArea = [
  { mes: 'Jan', vendas: 4000, lucro: 2400 },
  { mes: 'Fev', vendas: 3000, lucro: 1398 },
  { mes: 'Mar', vendas: 2000, lucro: 9800 },
  { mes: 'Abr', vendas: 2780, lucro: 3908 },
  { mes: 'Mai', vendas: 1890, lucro: 4800 },
  { mes: 'Jun', vendas: 2390, lucro: 3800 },
  { mes: 'Jul', vendas: 3490, lucro: 4300 },
  { mes: 'Ago', vendas: 4000, lucro: 2400 },
  { mes: 'Set', vendas: 3000, lucro: 1398 },
  { mes: 'Out', vendas: 2000, lucro: 9800 },
  { mes: 'Nov', vendas: 2780, lucro: 3908 },
  { mes: 'Dez', vendas: 1890, lucro: 4800 },
];

const CORES = ['#FFBB28', '#00C49F', '#FF8042', '#0088FE'];

const Dashboard = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white p-6">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-3xl font-semibold mb-4 lg:mb-0">Gerenciador de Inventário</h1>
          <nav>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
              <li><a href="/" className="text-2xl hover:text-white hover:border-b-2">Início</a></li>
              <li><a href="/products" className=" text-2xl hover:text-white hover:border-b-2">Produtos</a></li>
              <li><a href="/reports" className="text-2xl hover:text-white hover:border-b-2">Relatórios</a></li>
              <li><a href="/settings" className="text-2xl hover:text-white hover:border-b-2">Configurações</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="p-8 bg-gray-800">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-gray-200">Dashboard de Vendas</h1>
          <p className="text-xl text-gray-400 mt-4">Análise de desempenho e métricas de vendas.</p>
        </div>

{/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Evolução de Vendas</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dadosGraficoLinha}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nome" tick={{ fill: '#FFFFFF' }} />
                <YAxis tick={{ fill: '#FFFFFF' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#00FF7F" strokeWidth={4} />
                <Line type="monotone" dataKey="pv" stroke="#FF6347" strokeWidth={4} />
              </LineChart>
            </ResponsiveContainer>
          </div>

    
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Vendas vs Devoluções</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dadosGraficoBarra}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nome" tick={{ fill: '#FFFFFF' }} />
                <YAxis tick={{ fill: '#FFFFFF' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="vendas" fill="#4CAF50" name="Vendas" />
                <Bar dataKey="devolucoes" fill="#FF4500" name="Devoluções" />
              </BarChart>
            </ResponsiveContainer>
          </div>

         
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Distribuição de Produtos</h2>
            <ul className="list-disc list-inside">
              {dadosGraficoPizza.map((dados, index) => (
                <li key={index} className='text-lg'>
                  {dados.nome}: {dados.valor} unidades
                </li>
              ))}
            </ul>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dadosGraficoPizza}
                  dataKey="valor"
                  nameKey="nome"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label={({ nome, valor }) => `${nome}: ${(valor / totalProdutos * 100).toFixed(1)}%`}
                >
                  {dadosGraficoPizza.map((entrada, indice) => (
                    <Cell key={`cell-${indice}`} fill={CORES[indice % CORES.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="text-center text-gray-200 mt-4">
              <p>Total de Produtos: {totalProdutos}</p>
            </div>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Lucro vs Vendas</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={dadosGraficoArea}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" tick={{ fill: '#FFFFFF' }} />
                <YAxis tick={{ fill: '#FFFFFF' }} />
                <Tooltip />
                <Area type="monotone" dataKey="vendas" stackId="1" stroke="purple" fill="#8884d8" />
                <Area type="monotone" dataKey="lucro" stackId="1" stroke="green" fill="#82ca9d" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
