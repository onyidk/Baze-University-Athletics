'use client'
import React, { useState } from 'react'
import { Player } from '@/types'

const RosterSection = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)

  const players: Player[] = [
    {
      number: 2,
      name: 'Maria-Theresa Udoh Bernard',
      position: 'C',
      academicYear: 'Soph.',
      height: '5\'6"',
      hometown: 'Akwa Ibom',
      lastSchool: 'Funtaj HS',
      bio: "Full bio content for Maria-Theresa Udoh Bernard. She is a dedicated center with excellent court vision and strong defensive skills. Maria has been instrumental in the team's success this season.",
    },
    // Add more players as needed
  ]

  const openModal = (player: Player) => {
    setSelectedPlayer(player)
  }

  const closeModal = () => {
    setSelectedPlayer(null)
  }

  return (
    <section className="py-12 px-8 bg-gray-50" id="roster">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Team Roster</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {players.map(player => (
            <div
              key={player.number}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-80 bg-gray-200"></div>

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  #{player.number} {player.name}
                </h3>
                <div className="space-y-1 text-sm">
                  <div>
                    <strong>Position:</strong> {player.position}
                  </div>
                  <div>
                    <strong>Class:</strong> {player.academicYear}
                  </div>
                  <div>
                    <strong>Height:</strong> {player.height}
                  </div>
                  <div>
                    <strong>Hometown:</strong> {player.hometown}
                  </div>
                  <div>
                    <strong>Last School:</strong> {player.lastSchool}
                  </div>
                </div>
                <button
                  onClick={() => openModal(player)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Full Bio
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPlayer && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span
              className="float-right cursor-pointer text-xl font-bold hover:text-red-500"
              onClick={closeModal}
            >
              &times;
            </span>
            <h2 className="text-2xl font-bold mb-4">{selectedPlayer.name}</h2>
            <p className="text-gray-700">{selectedPlayer.bio}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default RosterSection
