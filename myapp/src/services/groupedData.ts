import * as apiService from '../services/getData'

async function GroupData() {

    let grouped: any = {};

    try {
        const res = await apiService.GetUsers()
        if (res?.status !== 200) {
            console.log("error >>", res?.statusText)
            return
        }
        const { users } = res.data
        users.forEach((user: any) => {
            const department = user.company.department;
            if (!grouped[department]) {
                grouped[department] = {
                    male: 0,
                    female: 0,
                    ageRange: "00-00",
                    hair: {},
                    addressUser: {}
                };
            }

            // age rage
            let min = Number.parseInt(grouped[department].ageRange.slice(0, 2))
            let max = Number.parseInt(grouped[department].ageRange.slice(3, 5))
            let ageMinimum = Math.min(min, max);
            let ageMaximum = Math.max(min, max);

            if (ageMinimum == 0) {
                ageMinimum = user.age
            }

            if (Number.parseInt(user.age) < ageMinimum) {
                ageMinimum = user.age
            }

            if (Number.parseInt(user.age) > ageMaximum) {
                ageMaximum = user.age
            }

            grouped[department].ageRange = `${ageMinimum}-${ageMaximum}`

            // count gender
            user.gender === 'male' ? grouped[department].male++ : grouped[department].female++;

            // Count hair color
            const hairColor = user.hair.color;
            grouped[department].hair[hairColor] = (grouped[department].hair[hairColor] || 0) + 1;

            // Collect user addresses
            const addressKey = `${user.firstName}${user.lastName}`;
            grouped[department].addressUser[addressKey] = user.address.postalCode;
        });

    } catch (error) {
        console.log("error >>", error)
    }

    return grouped;
}

module.exports = GroupData();