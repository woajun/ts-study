function makeSthToArray<T>(sth: T): T[] {
    return [sth];
}

const numberArray = makeSthToArray(3);
const stringArray = makeSthToArray('3');

type Vehicle = {
    name: string
}

const airplain = {name: '비행기'}
const vehicleArray = makeSthToArray<Vehicle>(airplain);

// 리엑트나 뷰에서 응용
<CommonList data={vehicleArray} rowContorl={(row) => {row.name}} />
// data에 넘긴 Vehicle[] 타입을 rowControl의 row에서 Vehicle로 받을 수 있음.
// 다른 타입 예를들어 string[] 을 넘기면 string이 오는 식.