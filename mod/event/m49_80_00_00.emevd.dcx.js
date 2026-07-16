// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(0)) {
        if (EventFlag(49800000)) {
            $InitializeCommonEvent(0, 90055000, 49805200, 1, 49802200, 49800201);
            $InitializeCommonEvent(0, 90055001, 49805200, 1, 49800201, 49800200);
        }
        if (EventFlag(49800001)) {
            $InitializeCommonEvent(0, 90055000, 49805200, 2, 49802200, 49800201);
            $InitializeCommonEvent(0, 90055001, 49805200, 2, 49800201, 49800200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49800200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49802200, 49800200);
    }
    $InitializeCommonEvent(0, 90065910, 49800200, 49800205, 49800800, 920210, 690047, 49805210, 49800800, 907100301, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49800200, 49800800, 920210, 49805210, 49800800, 907100301, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49800800, 1, 0, 0, 1050, 920210, 907100301, 49800800);
    }
    $InitializeCommonEvent(0, 90015012, 49805210, 49800200);
    $InitializeCommonEvent(1, 90015012, 0, 49800200);
    $InitializeCommonEvent(0, 90015020, 49800200, 49800800);
    $InitializeCommonEvent(0, 90015008, 49800205, 49800800, 920210, 49800800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49802200, 49800800);
        $InitializeCommonEvent(0, 90015023, 49800200, 40, 0, 49805210, 49800800, 907100301, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49800200, 49805210, 40, 920210, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49800200, 49800800, 49805210, 1020, 920210, 110320, 907100301, 49800800);
        $InitializeCommonEvent(0, 90015470, 49802200, 49800200, 49800800, 49805210, 0, 0, 49805210);
        $InitializeCommonEvent(0, 90015446, 49805210, 49800200, 49800800, 49802200);
        $InitializeCommonEvent(0, 90015460, 49802200, 49800800);
        $InitializeCommonEvent(0, 90015460, 49802200, 0);
        $InitializeCommonEvent(0, 90015460, 49802200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49802200, 49800800);
        $InitializeCommonEvent(0, 90015475, 49802200, 0);
        $InitializeCommonEvent(0, 90015475, 49802200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49800800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49800000, 49800300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49800000, 49800300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49800000, 49800300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49800000, 49800300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49800000, 49800300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49800000, 49800300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49800000, 49800301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49800000, 49800301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49800000, 49800301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49800000, 49800301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49800000, 49800301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49800000, 49800301);
    }
});

$Event(498002800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
});

$Event(49802810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterAI(chrEntityId);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterAI(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49800801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49800800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
