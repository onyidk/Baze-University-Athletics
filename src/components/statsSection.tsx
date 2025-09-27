import React from 'react'
import { StatItem } from '@/types'

const StatsSection = () => {
  const stats: StatItem[] = [
    {
      player: "Maria Udoh",
      games: 12,
      points: 22.4,
      rebounds: 8.1,
      assists: 6.3,
      steals: 2.0,
      blocks: 1.1
    },
    {
      player: "Nusaybah", 
      games: 12,
      points: 18.7,
      rebounds: 7.5,
      assists: 5.1,
      steals: 1.6,
      blocks: 0.7
    },
    {
      player: "Joan Miebai",
      games: 12,
      points: 15.6,
      rebounds: 6.2,
      assists: 4.8,
      steals: 1.3,
      blocks: 0.5
    }
  ]

  return (
    <section className="py-12 px-8 bg-gray-50" id="stats">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Player <span className="text-black">Stats</span>
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-3 text-center">Player</th>
                <th className="px-4 py-3 text-center">Games</th>
                <th className="px-4 py-3 text-center">Points</th>
                <th className="px-4 py-3 text-center">Rebounds</th>
                <th className="px-4 py-3 text-center">Assists</th>
                <th className="px-4 py-3 text-center">Steals</th>
                <th className="px-4 py-3 text-center">Blocks</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((stat, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                  <td className="px-4 py-3 text-center font-medium">{stat.player}</td>
                  <td className="px-4 py-3 text-center">{stat.games}</td>
                  <td className="px-4 py-3 text-center">{stat.points}</td>
                  <td className="px-4 py-3 text-center">{stat.rebounds}</td>
                  <td className="px-4 py-3 text-center">{stat.assists}</td>
                  <td className="px-4 py-3 text-center">{stat.steals}</td>
                  <td className="px-4 py-3 text-center">{stat.blocks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default StatsSection