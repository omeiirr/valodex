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
      className='flex items-center max-w-5xl gap-6 p-4 transition-colors duration-100 shadow-xl rounded-3xl pr-28 '
    >
      <div id={agentId} className='flex items-center m-2'>
        <div
          onClick={() => audioRef.current.play()}
          style={{
            backgroundImage: `url(${agentDetails?.background})`,
          }}
          className='bg-center bg-no-repeat bg-contain animate-pulse'
        >
          <img
            src={agentDetails?.fullPortrait || ''}
            alt=''
            // height={200}
            width={1600}
            // className='bg-contain h-80 '
          />
        </div>
      </div>

      <div className='flex flex-col justify-between gap-1 text-white '>
        <p className='text-6xl font-Valofont '>{agentDetails?.displayName}</p>
        <p className='text-justify text-md '> {agentDetails?.description} </p>

        <ColorPalette />

        <audio
          ref={audioRef}
          //   controls
          src={agentDetails?.voiceLine?.mediaList[0]?.wave}
        />
      </div>
    </div>
  );
};
