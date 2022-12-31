import { agentIds } from '../data/agentIds';

export const selectRandomAgent = () => {
  const agent = agentIds[Math.floor(Math.random() * agentIds.length)];
  console.log('helper log', agent);

  return agent;
};
