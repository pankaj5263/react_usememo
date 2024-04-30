import React,{useEffect, useRef} from 'react';

const areEqual = (previousDeps, curDeps) => {
    console.log("test122", previousDeps, curDeps)
    if(previousDeps==null){
      return false;
    }

    if(previousDeps.length!==curDeps.length){
       return false;
    }

    for(let i=0; i<previousDeps;i++){
       if(previousDeps[i]!==curDeps[i]){
          return false;
       }
    }
    

return true;

}

const useCustomMemo = (cb, deps) => {

    const memoizedRef = useRef(null);

    if(!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)){
        
        memoizedRef.current = {
            value:cb(),
            deps
        };
    }

    useEffect(()=>{
        return ()=>{
            memoizedRef.current = null;
        }
    },[]);

    return memoizedRef.current.value;
}

export default useCustomMemo;