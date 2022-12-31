// @ts-nocheck
import axios from 'axios';

import { useContext, useEffect, useRef, useState } from 'react';
import { ColorPalette } from './ColorPalette';
import { StoreContext, StoreDispatch } from './Store';

export const Agent = () => {
  const globalStore = useContext(StoreContext);
  const setGlobalStore = useContext(StoreDispatch);

  const audioRef = useRef(null);

  let agentId = globalStore.selectedAgent;
  let colorTheme = globalStore.colorTheme;

  const [agentDetails, setAgentDetails] = useState();
  const [expandDetails, setExpandDetails] = useState(false);

  const fetchAgentDetails = (agentUuid: any) => {
    // setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/agents/${agentUuid}`)
      .then((res) => {
        setAgentDetails({ ...res.data.data });
        setGlobalStore({
          ...globalStore,
          colorTheme: [...res?.data?.data?.backgroundGradientColors],
        });
        // if (res.status === 200) {
        //   setError(null);
        //   setLoading(false);
        // }
      })

      .catch((err) => {
        console.log(err);
        // setLoading(false);
        // setError(err);
      });
  };

  //   const [agentDetails, isLoading, error] = useFetchAgent(agentId);
  useEffect(() => {
    fetchAgentDetails(agentId);
  }, [agentId]);

  return (
    <div
      style={{
        background: `linear-gradient(to left, #${colorTheme[0]} , #${colorTheme[1]}, #${colorTheme[2]}, #${colorTheme[3]})`,
      }}
      className='flex flex-col items-center max-w-5xl gap-6 pb-10 transition-colors duration-100 shadow-xl p-14 rounded-3xl '
    >
      <div className='flex'>
        <div id={agentId} className='flex items-center m-2 '>
          <div className='flex flex-col ml-[-52px] items-center'>
            <div
              onClick={() => audioRef.current.play()}
              style={{
                backgroundImage: `url(${agentDetails?.background})`,
              }}
              className='bg-center bg-no-repeat bg-contain animate-[pulse_4s_ease-in-out_infinite] bg-red
            -500 '
            >
              <img src={agentDetails?.fullPortrait || ''} alt='' width={1600} />
            </div>

            <p className='mt-6 '>Click on the agent to hear them talk.</p>
          </div>
        </div>

        <div className='flex flex-col gap-1 '>
          <p className='text-6xl font-Valofont '>{agentDetails?.displayName}</p>
          <p className='text-justify text-md '> {agentDetails?.description} </p>

          <div className='flex-col mt-4'>
            <div className='flex items-center gap-3 text-2xl font-Valofont '>
              <img
                src={agentDetails?.role?.displayIcon}
                alt=''
                width={25}
                className=''
              />
              <p className='mt-2 font-semibold'>
                {agentDetails?.role?.displayName}
              </p>
            </div>
            <p className='text-justify'>{agentDetails?.role?.description}</p>
          </div>
          <ColorPalette />

          <audio
            ref={audioRef}
            //   controls
            src={agentDetails?.voiceLine?.mediaList[0]?.wave}
          />
        </div>
      </div>
      {expandDetails && <AgentAbilities agentDetails={agentDetails} />}
      <button
        onClick={() => setExpandDetails(!expandDetails)}
        className='mt-4 hover:animate-bounce'
      >
        {expandDetails ? 'Hide Abilities' : 'Show Abilities'}
      </button>
    </div>
  );
};

const AgentAbilities = ({ agentDetails }) => {
  console.log(agentDetails?.role);

  return (
    <div className='mt-12 font-primary'>
      <h2 className='text-2xl font-semibold uppercase font-Valofont'>
        Abilities
      </h2>
      <div className='flex justify-between w-full gap-4 '>
        {agentDetails?.abilities?.map((ability, idx) => (
          <div
            key={idx}
            className='flex-1 p-4 border-2 border-white rounded-lg '
          >
            <img
              className='mx-auto'
              src={ability?.displayIcon}
              alt=''
              width={60}
            />
            <p className='mt-2 mb-3 font-semibold text-center'>
              {ability?.displayName?.toUpperCase()}
            </p>
            <p className='text-justify'> {ability?.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
};
