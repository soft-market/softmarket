import React, { useState } from "react";
import Modal from "react-native-modal";
import styled from "styled-components/native";
import SMButton from "./atoms/SMButton";
import SMInput from "./atoms/SMInput";
import SMText from "./atoms/SMText";
import { Image } from "react-native";
import {
  launchImageLibrary,
  ImagePickerResponse,
  Asset
} from "react-native-image-picker";
import { UPLOAD } from "../hooks/useUpload";
import { useMutation } from "@apollo/client";

type CreateModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default ({ visible, onClose }: CreateModalProps) => {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<Asset[] | null>();
  const [upload] = useMutation(UPLOAD);

  const onUpload = async () => {
    const result: ImagePickerResponse = await launchImageLibrary({
      mediaType: "photo"
    });
    if (result.didCancel) {
      return;
    }
    if (result.errorCode) {
      console.log(result.errorMessage);
    }

    if (result.assets) {
      setImage(result.assets);
    }
  };

  const onCreate = async () => {
    if (image) {
      upload({
        variables: {
          file: {
            name: image[0].fileName,
            description: image[0].fileName
          }
        }
      });
    }
  };

  return (
    <Modal
      isVisible={visible}
      style={{ justifyContent: "flex-end", margin: 0 }}
      backdropOpacity={0.4}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
    >
      <Container>
        <ModalHeader>
          <SMText fontSize={22}>Create Your Item</SMText>
        </ModalHeader>
        <ModalContent>
          <SMText>Item Title</SMText>
          <SMInput width={250} placeholder="write your item title." />
          <SMText>Item Description</SMText>
          <SMInput width={250} placeholder="write your item title." />
          <Group>
            <Main onPress={onUpload}>
              <ItemImage
                source={
                  image
                    ? { uri: image[0].uri }
                    : require("../assets/images/default.png")
                }
                style={{ width: 150, height: 160, margin: 5 }}
              />
            </Main>
            <Sub>
              <ItemImage
                source={require("../assets/images/default.png")}
                style={{ width: 75, height: 75, margin: 5 }}
              />
              <ItemImage
                source={require("../assets/images/default.png")}
                style={{ width: 75, height: 75, margin: 5 }}
              />
            </Sub>
          </Group>
        </ModalContent>
        <ModalFooter>
          <SMButton
            onPress={onCreate}
            content={"Create"}
            height={40}
            width={150}
          />
        </ModalFooter>
      </Container>
    </Modal>
  );
};
const Container = styled.SafeAreaView`
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 600px;
  background-color: #ffffff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const ModalHeader = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.View`
  height: 400px;
`;
const ModalFooter = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
`;
const ItemImage = styled(Image)`
  width: 120px;
  height: 120px;
`;
const Group = styled.View`
  flex-direction: row;
  margin: 10px;
`;
const Main = styled.TouchableWithoutFeedback`
  margin-right: 10px;
`;
const Sub = styled.View`
  flex-direction: column;
`;
