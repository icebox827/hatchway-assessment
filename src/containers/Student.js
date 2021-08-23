import { GridItem, Text, Grid, Box, Divider, Input } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Image } from 'react-bootstrap';
import { fetchStudent } from '../actions/index';
import { Loader } from '../components/Loading';
import { Error } from '../components/Error';

const Students = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [tag, setTag] = useState('');
  const { students, loading, error } = useSelector((state) => state.students);

  const handleSubmit = (e) => {
    e.prevent.default();
    setTag(e.target.value)
  };

  useEffect(() => {
    dispatch(fetchStudent());
  },[dispatch]);

  if (loading) {
    return (
      <GridItem colSpan={4}>
        <Loader />
      </GridItem>
    );
  }
  if (error) {
    return (
      <GridItem colSpan={4}>
        <Error />
      </GridItem>
    );
  }

  return (
    <Container className="card">
      <Input 
        type="search" 
        placeholder="Search by name..."  
        onChange={e => setSearchName(e.target.value)} 
      />
      <Input 
        type="search" 
        className="searchTag"
        placeholder="Search by tag..."  
        onChange={e => setSearchName(e.target.value)} 
      />
      {
        students.filter((val) => {
          if (searchName === '') {
            return val;
          } else if (val.firstName.toLowerCase().includes(searchName.toLowerCase()) || val.lastName.toLowerCase().includes(searchName.toLowerCase())) {
            return val;
          }
        }).map((student) => (
          
            <Grid templateColumns="repeat(3, 1fr)" key={student.id}>
              <GridItem>
                <Box w="50%">
                  <Image src={student.pic} className="img-fluid img-thumbnail roundedCircle image" alt="student picture" />
                </Box>
              </GridItem>
              <GridItem colSpan={2}>
                <Box w="100%">
                  <Text 
                    fontSize="4xl" 
                    color="black"
                  >
                    {student.firstName}
                    {' '}
                    {student.lastName}
                  </Text>
                  <Text>
                      Email: 
                      {' '}
                      {student.email}
                  </Text>
                  <Text>
                    Company: 
                    {' '}
                    {student.company}
                  </Text>
                  <Text>
                    Skills: 
                    {' '}
                    {student.skill}
                  </Text>
                  <Text>
                    Average: 
                    {' '}
                    {(student.grades.reduce((a,b) => a + parseFloat(b),0) / student.grades.length)}
                  </Text>
                </Box>
                <div className="switch">
                  <button
                    className="toggle"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className={isOpen ? "hide" : "show"}>
                      +
                    </span>
                    <span className={!isOpen ? "hide" : "show"}>
                      -
                    </span>
                  </button>
                  { isOpen && <div className="content">
                    <ul className="notes">
                      {(student.grades.map((name, index) => {
                        return <li key={index}>Test {index + 1}: {name}%</li>;
                      }))}
                    </ul>
                    </div>
                  }
                </div>
                <h3 className="tag">{tag}</h3>
                <form onSubmit={handleSubmit}> 
                  <Input 
                    type="text"
                    name="name" 
                    placeholder="Add tag" 
                    w="40%" 
                    onChange={e => setTag(e.target.value)}
                  />
                </form>
                <Divider w="100%"/>
              </GridItem>
                <Divider w="100%"/>
            </Grid>
        ))
      }
    </Container>
  )
  
};

export default Students;
                                               