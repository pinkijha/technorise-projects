
import user from '../../../assets/userIcon.png'
import breastIcon from '../../../assets/breastIcon.png'
import cervicalIcon from '../../../assets/cervicalIcon.png'
import sickleIcon  from '../../../assets/sickleIcon.png'

export const dashboardCardItems = [
    {
        id:1,
        icon: user,
        name: 'Total',
        amount: '23,425',
        bgColor: 'bg-slate-50'
    },
    {
        id:2,
        icon: breastIcon,
        name: 'Sickle Cell',
        amount: '15,424',
        bgColor: 'bg-red-50'
    },
    {
        id:3,
        icon: cervicalIcon,
        name: 'Breast Cancer',
        amount: '8,001',
        bgColor: 'bg-green-50'
    }, 
    {
        id:4,
        icon: sickleIcon,
        name: 'Cervical Cancer',
        amount: '8,001',
        bgColor: 'bg-gray-50'
    },
]