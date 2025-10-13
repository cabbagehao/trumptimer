import React, { useState, useEffect } from 'react';
import { Skull, TrendingUp, Clock, AlertTriangle, Stethoscope, Scale, Target } from 'lucide-react';
import Layout from '../components/Layout/Layout';

interface VotingOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  votes: number;
  percentage: number;
}

const TrumpDie: React.FC = () => {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = 'Is Trump Dead? Did Trump Die Today? Latest Updates 2025';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Is Trump dead? Did Donald Trump die today? Find out if Trump died, when will Trump die, what happens if Trump dies. Latest news and predictions about Trump\'s death.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Is Trump dead? Did Donald Trump die today? Find out if Trump died, when will Trump die, what happens if Trump dies. Latest news and predictions about Trump\'s death.';
      document.head.appendChild(meta);
    }
  }, []);
  
  const [votingOptions, setVotingOptions] = useState<VotingOption[]>([
    {
      id: 'natural',
      title: 'Natural Death',
      description: 'Age-related health decline, natural causes. How old was Trump when he died?',
      icon: <Clock className="w-6 h-6" />,
      votes: 2847,
      percentage: 28.5
    },
    {
      id: 'assassination',
      title: 'Assassination',
      description: 'Political assassination, sniper attack, gunman kills Trump. Trump assassination attempt succeeds.',
      icon: <Target className="w-6 h-6" />,
      votes: 2156,
      percentage: 21.6
    },
    {
      id: 'health',
      title: 'Health Issues & Diet',
      description: 'Diet Coke addiction, McDonald\'s diet, obesity-related death. Trump diet kills.',
      icon: <Stethoscope className="w-6 h-6" />,
      votes: 1934,
      percentage: 19.3
    },
    {
      id: 'political',
      title: 'Political Violence',
      description: 'Political attacks, riots, mob violence. Everything Trump touches dies.',
      icon: <AlertTriangle className="w-6 h-6" />,
      votes: 1534,
      percentage: 15.4
    },
    {
      id: 'legal',
      title: 'Legal Stress & Investigations',
      description: 'Investigation pressure, court stress, prison suicide. Legal troubles kill Trump.',
      icon: <Scale className="w-6 h-6" />,
      votes: 945,
      percentage: 9.5
    },
    {
      id: 'accident',
      title: 'Accidental Death',
      description: 'Unexpected accidents, plane crashes, golf cart incidents.',
      icon: <TrendingUp className="w-6 h-6" />,
      votes: 572,
      percentage: 5.7
    }
  ]);

  const [hasVoted, setHasVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    if (hasVoted) return;
    setSelectedOption(optionId);
  };

  const handleVote = (optionId: string) => {
    if (hasVoted) return;

    setVotingOptions(options => 
      options.map(option => {
        if (option.id === optionId) {
          const newVotes = option.votes + 1;
          const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0) + 1;
          return {
            ...option,
            votes: newVotes,
            percentage: Math.round((newVotes / totalVotes) * 1000) / 10
          };
        } else {
          const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0) + 1;
          return {
            ...option,
            percentage: Math.round((option.votes / totalVotes) * 1000) / 10
          };
        }
      })
    );

    setHasVoted(true);
  };

  const totalVotes = votingOptions.reduce((sum, option) => sum + option.votes, 0);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white -mx-4 px-4">
        <div className="container mx-auto py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Skull className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-6xl font-bold mb-4 text-red-500">
              Is Trump Died Today?
            </h1>
            <p className="text-4xl font-semibold text-gray-300 mb-4">
              Not Yet.
            </p>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Did Trump die today? Is Donald Trump dead? When will Trump die? 
              Find out the latest on Trump's health and vote on how you think Trump will die.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-center">
                How Do You Think Trump Will Die?
              </h2>
              <p className="text-gray-300 text-center mb-8">
                Select your prediction below. Total votes: {totalVotes.toLocaleString()}
              </p>

              {/* Voting Options */}
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                {votingOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`
                      relative p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer
                      ${selectedOption === option.id
                        ? 'border-red-500 bg-red-900/20'
                        : hasVoted
                          ? 'border-gray-600 bg-gray-700/50 cursor-default'
                          : 'border-gray-600 bg-gray-700 hover:border-red-400 hover:bg-gray-600'
                      }
                    `}
                    onClick={() => handleSelect(option.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`
                        p-3 rounded-full 
                        ${selectedOption === option.id ? 'bg-red-500' : 'bg-gray-600'}
                      `}>
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                        <p className="text-gray-300 mb-3">{option.description}</p>
                        
                        {hasVoted && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>{option.votes.toLocaleString()} votes</span>
                              <span>{option.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-600 rounded-full h-2">
                              <div
                                className="bg-red-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${option.percentage}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {selectedOption === option.id && (
                      <div className="absolute top-2 right-2">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Vote Button */}
              {selectedOption && !hasVoted && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => handleVote(selectedOption)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
                  >
                    Cast Your Vote
                  </button>
                </div>
              )}

              {hasVoted && (
                <div className="mt-8 p-4 bg-green-900/20 border border-green-500 rounded-lg text-center">
                  <p className="text-green-400 font-semibold">
                    Thanks for voting! Your opinion has been recorded.
                  </p>
                </div>
              )}
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-800/50 rounded-lg p-6 text-center mb-8">
              <p className="text-gray-400 text-sm">
                This is a satirical discussion platform. All voting data is simulated for entertainment purposes only.
                We do not encourage or promote violence of any kind.
              </p>
            </div>

            {/* Trump Assassination Section */}
            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-red-400">
                Trump Assassination Attempt - July 13, 2024
              </h3>
              <div className="space-y-6">
                <div className="bg-red-900/20 border border-red-500 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-red-300">What Happened?</h4>
                  
                  {/* News Image */}
                  <div className="mb-6 text-center">
                    <img 
                      src="/trump.jpg"
                      alt="Trump with Secret Service agents raising fist after assassination attempt"
                      className="max-w-full h-auto rounded-lg mx-auto"
                      onError={(e) => {
                        // Fallback image if main image fails
                        e.currentTarget.src = "https://via.placeholder.com/600x400/4a5568/ffffff?text=Trump+Assassination+Attempt+July+13%2C+2024+Butler%2C+PA";
                      }}
                    />
                    <p className="text-xs text-gray-400 mt-2">
                      Trump raising his fist while being protected by Secret Service after the assassination attempt - July 13, 2024
                    </p>
                  </div>

                  <p className="text-gray-300 mb-4">
                    On July 13, 2024, during a campaign rally in Butler, Pennsylvania, Donald Trump was shot in the ear 
                    by a gunman who opened fire from a nearby rooftop. The assassination attempt shocked the nation and 
                    raised serious questions about Secret Service security.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>
                      <h5 className="font-semibold text-red-300 mb-2">Key Facts:</h5>
                      <ul className="space-y-1">
                        <li>• Trump shot in right ear, survived</li>
                        <li>• Shooter: Thomas Matthew Crooks, 20</li>
                        <li>• Location: Butler, Pennsylvania rally</li>
                        <li>• Date: July 13, 2024</li>
                        <li>• Trump shooter died at scene</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-300 mb-2">Casualties:</h5>
                      <ul className="space-y-1">
                        <li>• 1 rally attendee died (Corey Comperatore)</li>
                        <li>• 2 others critically injured</li>
                        <li>• Trump wounded but survived</li>
                        <li>• Shooter killed by Secret Service</li>
                        <li>• Man who died at Trump rally was protecting family</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4">Timeline of Events</h4>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex gap-4">
                      <span className="text-red-400 font-semibold min-w-[80px]">6:02 PM</span>
                      <span>Trump begins speaking at Butler rally</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-red-400 font-semibold min-w-[80px]">6:11 PM</span>
                      <span>First shots fired from rooftop, Trump shot in ear</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-red-400 font-semibold min-w-[80px]">6:12 PM</span>
                      <span>Secret Service neutralizes shooter, Trump rushed off stage</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-red-400 font-semibold min-w-[80px]">Later</span>
                      <span>Trump treated at hospital, released same evening</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4">How Close Was Trump to Dying?</h4>
                  <p className="text-gray-300 mb-4">
                    The assassination attempt came extremely close to being fatal. Trump was shot in the ear, 
                    just inches from a potentially deadly head shot. The shooter had a clear line of sight and 
                    managed to fire multiple rounds before being neutralized.
                  </p>
                  <div className="bg-yellow-900/20 border border-yellow-500 rounded-lg p-4">
                    <p className="text-yellow-300 text-sm">
                      <strong>Security Failures:</strong> The incident exposed significant Secret Service security lapses, 
                      including failure to secure the rooftop from which the shooter fired. Many asked: 
                      "How did the Trump shooter get so close?" and "Could this happen again?"
                    </p>
                  </div>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4">Related Searches After the Event</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    {[
                      'trump shot',
                      'trump assassination attempt',
                      'who died at trump rally',
                      'trump shooter died',
                      'did trump die from shooting',
                      'trump almost died',
                      'how close was trump to dying',
                      'man who died at trump rally',
                      'trump shooting who died',
                      'did anyone die at trump shooting',
                      'trump supporter dies',
                      'who died at the trump rally'
                    ].map((keyword, index) => (
                      <a 
                        key={index} 
                        href={`https://www.google.com/search?q=${encodeURIComponent(keyword)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-600 px-2 py-1 rounded text-gray-300 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer block text-center"
                      >
                        {keyword}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* News & Rumors Section */}
            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Latest Trump Death News & Rumors
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-red-400">Recent Searches</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• Did Trump die at rally today?</p>
                    <p>• Has Trump died yet in 2025?</p>
                    <p>• Trump shooter died - who killed Trump?</p>
                    <p>• When did Ivana Trump die?</p>
                    <p>• How did Fred Trump die?</p>
                    <p>• What happens if Trump dies before inauguration?</p>
                    <p>• Who would be president if Trump died?</p>
                    <p>• Trump says 300 million people died</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-red-400">Death Predictions</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>• Will Trump die in office during second term?</p>
                    <p>• Is Trump going to die soon from health issues?</p>
                    <p>• How likely is Trump to die of natural causes?</p>
                    <p>• Trump diet coke addiction killing him slowly</p>
                    <p>• Everything Trump touches dies - including himself?</p>
                    <p>• Odds of Trump dying before 2029</p>
                    <p>• Trump assassination attempt - will next one succeed?</p>
                    <p>• Did anyone die at Trump shooting incident?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section with Keywords */}
            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <h4 className="text-lg font-semibold mb-2">Did Trump Die Today?</h4>
                  <p className="text-gray-300">No, Donald Trump did not die today. This page tracks speculation about when will Trump die and what would happen if Trump died.</p>
                </div>
                <div className="border-b border-gray-700 pb-4">
                  <h4 className="text-lg font-semibold mb-2">Is Trump Going to Die Soon?</h4>
                  <p className="text-gray-300">Trump is currently alive. This is a discussion forum about various scenarios of how Trump might die in the future.</p>
                </div>
                <div className="border-b border-gray-700 pb-4">
                  <h4 className="text-lg font-semibold mb-2">What Happens if Trump Dies in Office?</h4>
                  <p className="text-gray-300">If Trump dies while serving as president, the Vice President would assume the presidency according to the US Constitution.</p>
                </div>
                <div className="border-b border-gray-700 pb-4">
                  <h4 className="text-lg font-semibold mb-2">How Old Was Fred Trump When He Died?</h4>
                  <p className="text-gray-300">Fred Trump, Donald Trump's father, died at age 93 in 1999. Many wonder about Trump family longevity and when will Donald Trump die.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Will Trump Die of Natural Causes?</h4>
                  <p className="text-gray-300">Given Trump's age and diet, many speculate about natural causes. Vote above to share your prediction about how Trump will die.</p>
                </div>
              </div>
            </div>

            {/* Related Searches */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Related Searches
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'did trump die',
                  'trump died',
                  'when will trump die',
                  'donald trump died',
                  'is trump going to die',
                  'will trump die in office',
                  'what would happen if trump died',
                  'how is trump going to die',
                  'trump die',
                  'will trump die',
                  'did donald trump die',
                  'is trump dying',
                  'trump dies',
                  'when will donald trump die',
                  'what happens if trump dies',
                  'odds of trump dying',
                  'everything trump touches dies'
                ].map((keyword, index) => (
                  <a 
                    key={index} 
                    href={`https://www.google.com/search?q=${encodeURIComponent(keyword)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 px-3 py-2 rounded text-sm text-gray-300 hover:bg-gray-600 hover:text-white transition-colors cursor-pointer block"
                  >
                    {keyword}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrumpDie;