import SlideComponent from "@/components/common/slideComponent"
import courseService from "@/services/courseService"
import useSWR from "swr"
import styles from "../../../styles/slideCategory.module.scss"

const NewestCategory = function() {
  const {data, error} = useSWR("/newest", courseService.getNewestCourses)

  if(error) return error

  if(!data) return (<><p>Loading...</p></>)
    
  return (
    <>
      <p className={styles.titleCategory}>LANÇAMENTOS</p>
      <SlideComponent course={data}/>
    </>
  )
}

export default NewestCategory