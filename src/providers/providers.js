import { GroupsProvider } from './Groups';
import HabitsProvider from './habits';

const Providers = ({children}) => {
  return (
    <GroupsProvider>
      <HabitsProvider>
        {children}
      </HabitsProvider>
    </GroupsProvider>
  )
}

export default Providers;