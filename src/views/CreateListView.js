// 하이 오더 컴포넌트, routes/index.js 재사용

import ListView from './ListView';
import bus from '../utils/bus';

export default function CreateListView(routeName) {
    return {
        name: routeName,
        created() {
            bus.$emit("start:spinner");
            setTimeout(() => {
              this.$store.dispatch('FETCH_LIST', this.$route.name) // store/index.js 참고 (vuex)
                .then(() => {
                  bus.$emit("end:spinner");
                })
                .catch((error) => console.log(error));
            }, 1000);
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}