export const loadRemote = async (remoteName: string) => {
  switch (remoteName) {
    case 'owner':
      return import('owner/Module');
    default:
      throw new Error('Unknown remote');
  }
};
