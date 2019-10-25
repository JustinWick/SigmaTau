{-# LANGUAGE MagicHash #-}
{-# LANGUAGE FlexibleInstances #-}
----{-# LANGUAGE TypeSynonymInstances #-}
{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE ForeignFunctionInterface #-}
module World where

import Control.Monad ((<=<))

import Foreign.C
import Foreign.C.Types
import Data.Int
import Data.Word
import Foreign.Ptr
import Foreign.ForeignPtr
import Foreign.Storable

import Linear.Affine
import Linear.V3

newtype World = World (ForeignPtr ())
type ERefFFI = Word32
newtype EntityRef = EntityRef ERefFFI

foreign import ccall "newWorld" newWorldFFI :: IO (Ptr ())
foreign import ccall "&destroyWorld" destroyWorldFFIPtr :: FunPtr (Ptr () -> IO())
foreign import ccall "updateWorld" updateWorldFFI :: Ptr() -> IO ()
foreign import ccall "newEntity" newEntityFFI :: Ptr() -> Int32 -> Int32 -> Int32 -> IO (ERefFFI)
foreign import ccall "moveEntity" moveEntityFFI :: Ptr() -> ERefFFI -> Int32 -> Int32 -> Int32 -> IO ()
foreign import ccall "forceEntity" forceEntityFFI :: Ptr() -> ERefFFI -> CFloat -> CFloat -> CFloat -> IO ()
foreign import ccall "getEntityPos" getEntityPosFFI :: Ptr() -> ERefFFI -> ERefFFI -> IO (Ptr (V3 Int32))
----foreign import ccall "getEntityPos" getEntityPosFFI :: (Ptr()) -> CUInt -> IO (Int32,Int32,Int32)
type DoEntitiesCallback = ERefFFI->IO ()
foreign import ccall "wrapper" mkDoEntitiesCallback :: DoEntitiesCallback -> IO (FunPtr DoEntitiesCallback)
foreign import ccall "doEntities" doEntitiesFFI :: Ptr() -> FunPtr DoEntitiesCallback -> IO ()
----foreign import ccall "getEntities" getEntitiesFFI :: (Ptr()) -> (FunPtr (ERefFFI->IO (Ptr a))) -> IO (Ptr (V3 Int32))

newWorld :: IO World
newWorld = do
	world <- newWorldFFI
	World <$> newForeignPtr destroyWorldFFIPtr world

updateWorld :: World -> IO ()
updateWorld (World world) = withForeignPtr world (\w->updateWorldFFI w)

newEntity :: World -> Point V3 Int32 -> IO EntityRef
newEntity (World world) (P (V3 x y z)) = EntityRef <$> withForeignPtr world (\w->newEntityFFI w x y z)

----moveEntity :: World -> EntityRef -> (Int32,Int32,Int32) -> IO ()
----moveEntity (World world) (EntityRef entityRef) (x,y,z) = withForeignPtr world (\w->moveEntityFFI w entityRef x y z)

forceEntity :: World -> EntityRef -> V3 Float -> IO ()
forceEntity (World world) (EntityRef entityRef) (V3 x y z) = withForeignPtr world (\w->forceEntityFFI w entityRef (CFloat x) (CFloat y) (CFloat z))

getEntityPos :: World -> EntityRef -> EntityRef -> IO (Point V3 Int32)
getEntityPos (World world) (EntityRef rootEntityRef) (EntityRef entityRef) = withForeignPtr world (\w->P <$> (peek =<< getEntityPosFFI w rootEntityRef entityRef))

doEntities :: World -> (EntityRef->IO()) -> IO ()
doEntities (World world) callback = withForeignPtr world (\w->(\fp->doEntitiesFFI w fp >> freeHaskellFunPtr fp) =<< mkDoEntitiesCallback (\er->callback $ EntityRef er))


----instance Storable (V3 Int32) where
----	sizeOf _ = 3 * sizeOf (undefined::Int32)
----	peek ptr = do
----		x <- peekByteOff ptr 0 :: IO Int32
----		y <- peekByteOff ptr (sizeOf x :: Int)
----		z <- peekByteOff ptr (sizeOf x + sizeOf y)
----		return $ V3 x y z
----instance Storable (Int32,Int32,Int32) where
----	sizeOf _ = 3 * sizeOf (undefined::Int32)
----	peek ptr = do
----		x <- peekByteOff ptr 0 :: IO Int32
----		y <- peekByteOff ptr (sizeOf x :: Int)
----		z <- peekByteOff ptr (sizeOf x + sizeOf y)
----		return (x,y,z)

